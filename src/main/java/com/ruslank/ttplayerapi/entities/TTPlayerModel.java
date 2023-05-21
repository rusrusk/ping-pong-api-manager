package com.ruslank.ttplayerapi.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

//for interaction with ui
@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class TTPlayerModel {

    private Long id;

    private String firstName;
    private String lastName;
    private String email;
}
