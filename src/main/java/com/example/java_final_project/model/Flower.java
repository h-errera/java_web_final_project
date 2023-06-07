package com.example.java_final_project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Flower {

    @Id
    @GeneratedValue
    private Long id;
    private String species;
    private String color;


    public Flower(){

    }

    public Flower(Long id, String species, String color){
        this.id = id;
        this.species = species;
        this.color = color;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Flower flower)) return false;
        return Objects.equals(getId(), flower.getId()) && Objects.equals(getSpecies(), flower.getSpecies()) && Objects.equals(getColor(), flower.getColor());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getSpecies(), getColor());
    }

    @Override
    public String toString() {
        return "Flower{" +
                "id=" + id +
                ", species='" + species + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
