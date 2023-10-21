import { Agreement } from "./Agreement";
import { User } from "./User";
import { SpaceArtAPIClient } from "./abstracts/APIClient";

export class Rate extends SpaceArtAPIClient {

  private agreement: Agreement;
  private author: User | undefined;
  private description: string | undefined;
  private rate: number | undefined;

  private path = "/agreement/rate";

  /** 
   * @param string ID do contrato
   */
  constructor(agreement: Agreement) {
    super();
    this.agreement = agreement;
  }

  /** 
   * Preenche todos dos atributos
   */
  public factory(rate: { author: User, description: string, rate: number }) {
    this.author = rate.author;
    this.description = rate.description;
    this.rate = rate.rate;

    return this;
  }

  public async create(): Promise<void> {
    let response = await this.request.post(this.path, {
      agreement: this.agreement.getID(),
      author: this.author?.id,
      rate: this.rate,
    });

    if (response.status !== Rate.httpStatusCode.CREATED) {
      Rate.errorTypes
        .HTTPRequestError.throw(
          `Não foi possível adicionar uma avaliação para o contrato ${this.agreement.getID()}`
        );
    }
  }

  public async fetchList(): Promise<Rate[]> {

    let response = await this.request.get(
      `${this.path}/list?offset=0&limit=2&agreement=${this.agreement.getID()}`
    );

    if (response.status !== Rate.httpStatusCode.OK) {
      Rate.errorTypes
        .HTTPRequestError.throw(
          `Não foram encontradas avaliações para o contrato ${this.agreement.getID()}`
        );
    }

    return response.data.map((rate: any) => {
      const author = new User();
      author.id = rate.author;

      return new Rate(rate.agreement).factory({
        author,
        description: rate.description,
        rate: rate.rate,
      })
    }
    );
  }

  /**
   * Atualiza nota de descrição da avaliação
   */
  public async update() {
    const agreement = this.agreement.getID();
    const author = this.author?.id;

    const requestBodies = [ // Corpos das requisições
      {
        agreement, author,
        column: "rate",
        info: this.rate,
      },
      {
        agreement, author,
        column: "rate",
        info: this.rate,
      }
    ];

    let [rateResponse, descriptionResponse] = await Promise.all( // Executa as duas requisições simultaneamente
      requestBodies.map(body => this.request.post(`${this.path}/update`, body))
    )


    if (rateResponse.status !== Rate.httpStatusCode.NO_CONTENT) {
      Rate.errorTypes
        .HTTPRequestError
        .throw(`Não foi possível atualizar a nota de uma avaliação do contrato ${this.agreement.getID()}`);
    }

    if (descriptionResponse.status !== Rate.httpStatusCode.NO_CONTENT) {
      Rate.errorTypes
        .HTTPRequestError
        .throw(`Não foi possível atualizar a descrição de uma avaliação do contrato ${this.agreement.getID()}`);
    }
  }

  public async delete() {
    let response = await this.request.post(`${this.path}/delete`, {
      agreement: this.agreement.getID(),
      author: this.author,
    });

    if (response.status !== Rate.httpStatusCode.NO_CONTENT) {
      Rate.errorTypes
        .HTTPRequestError
        .throw(`Não foi possível deletar uma avaliação do contrato ${this.agreement.getID()}`);
    }
  }

  public toObject() {
    return {
      agreement: this.agreement,
      author: this.author,
      description: this.description,
      rate: this.rate,
    }
  }
}