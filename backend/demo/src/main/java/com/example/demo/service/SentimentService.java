package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Sentiment;
import com.example.demo.repository.SentimentRepository;

@Service
public class SentimentService {

    @Autowired
    private SentimentRepository sentimentRepository;

    public Sentiment saveSentiment(Sentiment sentiment) {
        return sentimentRepository.save(sentiment);
    }

    public Optional<Sentiment> getSentimentById(Integer id) {
        return sentimentRepository.findById(id);
    }

    public void deleteSentiment(Integer id) {
        sentimentRepository.deleteById(id);
    }

    // Additional methods as needed
}