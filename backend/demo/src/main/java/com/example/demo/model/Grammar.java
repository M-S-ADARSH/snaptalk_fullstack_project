package com.example.demo.model;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToOne;

@Entity
public class Grammar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String analysisResult; // Add fields as needed

    // @OneToOne(mappedBy = "grammar")
    // @JsonIgnore
    // private Speech speech;

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAnalysisResult() {
        return analysisResult;
    }

    public void setAnalysisResult(String analysisResult) {
        this.analysisResult = analysisResult;
    }

    // public Speech getSpeech() {
    //     return speech;
    // }

    // public void setSpeech(Speech speech) {
    //     this.speech = speech;
    // }
}
