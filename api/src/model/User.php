<?php

declare(strict_types=1);

namespace App\Model;

use App\DAO\UsersDB;
use App\Util\Tool\Location;
use App\Util\DataFormmatException;

/**
 * Classe modelo de usuário
 * @package Model
 * @author Ariel Santos (MrXacx)
 */
class User extends \App\Model\Template\Entity
{

    use Location;

    /**
     * Nome completo do usuário
     * @var string
     */
    protected string $name;

    /**
     * Email do usuário
     * @var string
     */
    protected string $email;

    /**
     * Número de telefone do usuário
     * @var string
     */
    protected string $phone;

    /**
     * Senha do usuário
     * @var string
     */
    protected string $password;

    /**
     * site do usuário
     * @var string
     */
    protected string|null $website = null;

    /**
     * ImageURLm de perfil do usuário
     * @var string
     */
    protected string|null $imageURL = null;

    /**
     * Nota média do usuário
     * @var float
     */
    protected float|string $rate;


    /**
     * Obtém um modelo de usuário inicializado
     * 
     * @param array $attr Array associativo contento todas as informações do modelo
     * @return self Instância da classe
     */
    public static function getInstanceOf(array $attr): self
    {
        $entity = new User();

        foreach ($attr as $key => $value) {
            $atributeName = match ($key) {
                'id' => 'id',
                UsersDB::EMAIL => 'email',
                UsersDB::PASSWORD => 'password',
                UsersDB::NAME => 'name',
                UsersDB::IMAGE_URL => 'imageURL',
                UsersDB::CEP => 'CEP',
                UsersDB::FEDERATION => 'federation',
                UsersDB::CITY => 'city',
                UsersDB::PHONE => 'phone',
                UsersDB::SITE => 'website',
                UsersDB::RATE => 'rate',
                default => null
            };

            if (isset($atributeName)) {
                $entity->$atributeName = $value;
            }
        }

        return $entity;
    }

    /**
     * @param string $id ID do usuário
     */
    public function setID(string $id): void
    {

        $this->id = $this->validator->isUUID($id) ? $id : throw new DataFormmatException('ID');
    }

    /**
     * Obtém ID do usuário
     * @return string ID 
     */
    public function getID(): string
    {
        return $this->id;
    }

    /**
     * @param string $email Email do usuário
     */
    public function setEmail(string $email): void
    {
        $this->email = $this->validator->isEmail($email) ? $email : throw new DataFormmatException('EMAIL');
    }

    /**
     * Obtém Email do usuário
     * @return string Email 
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $password Senha do usuário
     */
    public function setPassword(string $password): void
    {
        $this->password = $this->validator->isFit($password) ? $password : throw new DataFormmatException('PASSWORD', DataFormmatException::LENGTH);
    }

    /**
     * Obtém senha do usuário
     * @return string senha 
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $name Nome do usuário
     */
    public function setName(string $name): void
    {
        $this->name = $this->validator->isFit($name) ? $name : throw new DataFormmatException('NAME', DataFormmatException::LENGTH);
    }

    /**
     * Obtém Nome do usuário
     * @return string nome
     */
    public function getName(): string
    {
        return $this->name;
    }


    /**
     * @param string $phone Telefone do usuário
     */
    public function setPhone(string $phone): void
    {
        $this->phone = $this->validator->isPhone($phone) ? $phone : throw new DataFormmatException('PHONE');
    }

    /**
     * Obtém Número de telefone do usuário
     * @return string Número de telefone 
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @param string $website URL do website do usuário
     */
    public function setWebsite(string $website): void
    {
        $this->website = $this->validator->isURL($website) ? $website : throw new DataFormmatException('website');
    }

    /**
     * Obtém ID do usuário
     * @return string ID 
     */
    public function getWebsite(): string
    {
        return $this->website;
    }

    /**
     * @param string $image URL do imagem de perfil do usuário
     */
    public function setImageURL(string $image): void
    {
        $this->imageURL = $this->validator->isURL($image) ? $image : throw new DataFormmatException('image URL');
    }

    /**
     * Obtém ID do usuário
     * @return string ID 
     */
    public function getImageURL(): string
    {
        return $this->imageURL;
    }

    public function setRate(float $rate): void
    {
        $this->rate = $rate;
    }

    public function getRate(): float
    {
        return floatval($this->rate);
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'name' => $this->name,
            'imageURL' => $this->imageURL,
            'email' => $this->email ?? null,
            'password' => $this->password ?? null,
            'phone' => $this->phone ?? null,
            'location' => $this->toLocationArray(),
            'rate' => $this->rate,
            'website' => $this->website
        ]);
    }
}
