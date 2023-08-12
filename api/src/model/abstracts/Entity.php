<?php

namespace App\Model\Template;

abstract class Entity
{

    protected string $id;
    protected int $position;

    public function setID(string $id): void
    {
        $this->id = $id;
    }

    public function getID(): string
    {
        return $this->id;
    }

    public function toArray(): array{
        return [
            'id' => $this->id ?? null,
            'position' => $this->position ?? null,
        ];
    }
    abstract public static function getInstanceOf(array $attr): self;
}