package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Sentiment;

public interface SentimentRepository extends JpaRepository<Sentiment, Integer> {
    
}
