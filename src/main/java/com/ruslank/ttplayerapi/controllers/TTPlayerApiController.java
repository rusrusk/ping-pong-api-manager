package com.ruslank.ttplayerapi.controllers;

import com.ruslank.ttplayerapi.entities.TTPlayerModel;
import com.ruslank.ttplayerapi.services.TTPlayerApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/ttplayers")
@RequiredArgsConstructor
public class TTPlayerApiController {

    private final TTPlayerApiService ttPlayerApiService;

    @GetMapping("/player/{id}")
    public ResponseEntity<TTPlayerModel> getTTPlayer(@PathVariable Long id) {
        return new ResponseEntity<TTPlayerModel>(this.ttPlayerApiService.getTTPlayer(id), HttpStatus.OK);
    }

    @GetMapping("/players")
    public ResponseEntity<List<TTPlayerModel>> getAllTTPlayers() {
        return new ResponseEntity<List<TTPlayerModel>>(this.ttPlayerApiService.getAllTTPlayers(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TTPlayerModel> addTTPlayer(@RequestBody TTPlayerModel ttPlayerModel) {
        return new ResponseEntity<TTPlayerModel>(this.ttPlayerApiService.addTTPlayer(ttPlayerModel), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TTPlayerModel> updateTTPlayer(@PathVariable Long id, @RequestBody TTPlayerModel ttPlayerModel) {
        TTPlayerModel ttPlayerModel1 = this.ttPlayerApiService.updateTTPlayer(id, ttPlayerModel);
        return ResponseEntity.ok(ttPlayerModel1);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTTPlayer(@PathVariable Long id) {
        boolean toDelete = false;
        toDelete = this.ttPlayerApiService.deleteTTPlayer(id);
        Map<String, Boolean> map = new HashMap<>();
        map.put("deleted", toDelete);
        return ResponseEntity.ok(map);
    }
}
