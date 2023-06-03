package com.ruslank.ttplayerapi.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/demo")
public class demoController {

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hey from secured endpoint");
    }
}
