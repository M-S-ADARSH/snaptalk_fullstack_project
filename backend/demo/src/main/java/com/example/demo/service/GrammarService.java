package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Grammar;
import com.example.demo.repository.GrammarRepository;

@Service
public class GrammarService {

    @Autowired
    private GrammarRepository grammarRepository;

    public Grammar save(Grammar grammar) {
        return grammarRepository.save(grammar);
    }

    public Optional<Grammar> findById(Integer id) {
        return grammarRepository.findById(id);
    }

    public void deleteById(Integer id) {
        grammarRepository.deleteById(id);
    }
}
