package com.ruslank.ttplayerapi.services;

import com.ruslank.ttplayerapi.entities.TTPlayer;
import com.ruslank.ttplayerapi.entities.TTPlayerModel;
import com.ruslank.ttplayerapi.repository.TTPlayerRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.beans.Beans;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class TTPlayerApiServiceImplementation implements TTPlayerApiService {

    private final TTPlayerRepository ttPlayerRepository;


    @Override
    public TTPlayerModel getTTPlayer(Long id) {
        TTPlayer ttPlayer = this.ttPlayerRepository.findById(id).get();
        TTPlayerModel ttPlayerModel = new TTPlayerModel();
        BeanUtils.copyProperties(ttPlayer, ttPlayerModel);
        return ttPlayerModel;
    }

    @Override
    public List<TTPlayerModel> getAllTTPlayers() {

        List<TTPlayer> ttPlayer = this.ttPlayerRepository.findAll();
        List<TTPlayerModel> ttPlayerModels = ttPlayer
                .stream()
                .map(player -> new TTPlayerModel(
                        player.getId(),
                        player.getFirstName(),
                        player.getLastName(),
                        player.getEmail()
                ))
                .collect(Collectors.toList());
        return ttPlayerModels;
    }

    @Override
    public TTPlayerModel addTTPlayer(TTPlayerModel ttPlayerModel) {
        TTPlayer ttPlayer = new TTPlayer();
        BeanUtils.copyProperties(ttPlayerModel, ttPlayer);
        this.ttPlayerRepository.save(ttPlayer);
        return ttPlayerModel;
    }

    @Override
    public TTPlayerModel updateTTPlayer(Long id, TTPlayerModel ttPlayerModel) {
        TTPlayer ttPlayer = this.ttPlayerRepository.findById(id).get();
        ttPlayer.setFirstName(ttPlayerModel.getFirstName());
        ttPlayer.setLastName(ttPlayerModel.getLastName());
        ttPlayer.setEmail(ttPlayerModel.getEmail());
        this.ttPlayerRepository.save(ttPlayer);
        return ttPlayerModel;
    }

    @Override
    public boolean deleteTTPlayer(Long id) {
        TTPlayer ttPlayer = this.ttPlayerRepository.findById(id).get();
        this.ttPlayerRepository.delete(ttPlayer);
        return true;
    }
}
