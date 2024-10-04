package solariannotes.controller;

import java.util.logging.Logger;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/app")
public class SolarianNotesController {
    private static final Logger LOG = LoggerFactory(SolarianNotesController.class);

    @GetMapping("/helloworld")
    public ResponseEntity<String> helloworld() {
        LOG.info("Hello World!");
        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
