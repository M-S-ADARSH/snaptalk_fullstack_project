package com.example.demo.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Sentiment;
import com.example.demo.service.SentimentService;

@RestController
@RequestMapping("/sentiments")
public class SentimentController {

    @Autowired
    private SentimentService sentimentService;

    @PostMapping
    public ResponseEntity<Sentiment> createSentiment(@RequestBody Sentiment sentiment) {
        Sentiment savedSentiment = sentimentService.saveSentiment(sentiment);
        return ResponseEntity.ok(savedSentiment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sentiment> getSentiment(@PathVariable Integer id) {
        Optional<Sentiment> sentiment = sentimentService.getSentimentById(id);
        return sentiment.map(ResponseEntity::ok)
                        .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSentiment(@PathVariable Integer id) {
        sentimentService.deleteSentiment(id);
        return ResponseEntity.noContent().build();
    }

    // Additional endpoints as needed
}
