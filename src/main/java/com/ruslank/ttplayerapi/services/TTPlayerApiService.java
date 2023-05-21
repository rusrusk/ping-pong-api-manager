package com.ruslank.ttplayerapi.services;

import com.ruslank.ttplayerapi.entities.TTPlayerModel;

import java.util.List;
import java.util.Map;

public interface TTPlayerApiService {

    public TTPlayerModel getTTPlayer(Long id);

    public List<TTPlayerModel> getAllTTPlayers();

    public TTPlayerModel addTTPlayer(TTPlayerModel ttPlayerModel);

    public TTPlayerModel updateTTPlayer(Long id, TTPlayerModel ttPlayerModel);

    public boolean deleteTTPlayer(Long id);
}
