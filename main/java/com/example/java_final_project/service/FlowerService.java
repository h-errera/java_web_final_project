package com.example.java_final_project.service;


import com.example.java_final_project.model.Flower;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlowerService {

    private final FlowerRepository flowerRepository;

    public FlowerService( FlowerRepository repository ){
        this.flowerRepository = repository;
    }

    public Optional<List<Flower>> findAll() {
        List<Flower> flower = flowerRepository.findAll();
        return Optional.ofNullable(flower);
    }

    public void save(Flower flower){
        flowerRepository.save(flower);
    }

    public void put(Flower flower){
        Long id = flower.getId();
        Flower foundFlower = flowerRepository.getReferenceById(id);
        foundFlower.setColor(flower.getColor());
        foundFlower.setSpecies(flower.getSpecies());
        flowerRepository.save(foundFlower);
    }

    public void delete (Long id) {
        flowerRepository.deleteById(id);
    }

}
