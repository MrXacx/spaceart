<?php

namespace App\DAO\Enumerate;

enum AgreementColumn
{

    public const HIRER = 'hirer';
    public const HIRED = 'hired';
    public const PRICE = 'price';
    public const ART = 'art';
    public const DATE = 'date';
    public const INITAL_TIME = 'inital_time';
    public const FINAL_TIME = 'final_time';
    public const STATUS = 'status';

    /**
     * Confere se valor é idêntico ao nome de alguma coluna da tabela
     * 
     * @param string Nome da coluna
     * @return bool Retorna true se coluna for compatível
     */
    public static function isColumn(string $column): bool
    {
        return !is_bool(array_search($column, self::cases()));
    }
}
