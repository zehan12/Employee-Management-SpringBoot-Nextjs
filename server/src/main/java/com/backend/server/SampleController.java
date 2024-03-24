package com.backend.server;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This Controller supports REST API's (HTTP Requests).
// The Request coming to endpoint /hello transfer to this controller

@RestController
@RequestMapping("/hello")
public class SampleController {
    @RequestMapping("/")
    public String sayHello() {
        return "Hello";
    }
}