package com.example.java_final_project.controller;


import com.example.java_final_project.model.Flower;
import com.example.java_final_project.service.FlowerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@ResponseBody
@RequestMapping("/flower")
public class FlowerController {


    private final FlowerService flowerService;

    public FlowerController(FlowerService flowerService){
        this.flowerService = flowerService;
    }

    //RETURNS THE .findAll() METHOD
    @GetMapping
    public Optional<List<Flower>> findAll(){
        return flowerService.findAll();
    }

    //returns void type
    //calls flowerService.save(flower)
    //listens at requestMapping endpoint
    //requires a requestBody
    @PostMapping
    public void saveFlower(@RequestBody Flower flower){
        flowerService.save(flower);
    }

    @DeleteMapping
    public void deleteFlower(@PathVariable("id") Long id){
        flowerService.delete(id);
    }

    @PutMapping
    public void putFlower(@RequestBody Flower flower){
        flowerService.put(flower);
    }

}
