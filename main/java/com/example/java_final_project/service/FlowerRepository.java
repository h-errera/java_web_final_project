package com.example.java_final_project.service;

import com.example.java_final_project.model.Flower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FlowerRepository extends JpaRepository<Flower, Long> {
    void deleteById(Long id);
    //Flower findBySpecies(String species);
    //Flower findByColor(String color)

}
