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

import com.example.demo.model.Grammar;
import com.example.demo.service.GrammarService;

@RestController
@RequestMapping("/api/grammar")
public class GrammarController {

    @Autowired
    private GrammarService grammarService;

    @PostMapping
    public ResponseEntity<Grammar> createGrammar(@RequestBody Grammar grammar) {
        Grammar savedGrammar = grammarService.save(grammar);
        return ResponseEntity.ok(savedGrammar);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Grammar> getGrammarById(@PathVariable Integer id) {
        Optional<Grammar> grammar = grammarService.findById(id);
        return grammar.map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGrammar(@PathVariable Integer id) {
        grammarService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
