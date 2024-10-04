package solariannotes.app;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SolarianNotesConfig.class)
public class SolarianNotesApp {
    public static void main(String[] args) {
        SpringBootApplication.run(SolarianNotesApp.class);
    }
}
