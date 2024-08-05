package com.example.demo.model;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToOne;

@Entity
public class Sentiment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String sentimentResult; // Add fields as needed

    // @OneToOne(mappedBy = "sentiment")
    // @JsonIgnore
    // private Speech speech;

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSentimentResult() {
        return sentimentResult;
    }

    public void setSentimentResult(String sentimentResult) {
        this.sentimentResult = sentimentResult;
    }

    public Sentiment(Integer id, String sentimentResult) {
        this.id = id;
        this.sentimentResult = sentimentResult;
    }

    public Sentiment() {
    }

    // public Speech getSpeech() {
    //     return speech;
    // }

    // public void setSpeech(Speech speech) {
    //     this.speech = speech;
    // }
}
