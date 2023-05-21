package com.ruslank.ttplayerapi.repository;

import com.ruslank.ttplayerapi.entities.TTPlayer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TTPlayerRepository extends JpaRepository<TTPlayer, Long> {

}
