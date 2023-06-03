package com.ruslank.ttplayerapi.repository;

import com.ruslank.ttplayerapi.entities.TTPlayer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TTPlayerRepository extends JpaRepository<TTPlayer, Long> {

    Optional<TTPlayer> findByEmail(String email);
}
