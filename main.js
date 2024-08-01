window.onload = () => {
        document.body.classList.remove("container");
    
        // Coba memutar audio
        var audio = document.getElementById('background-audio');
    
        // Coba memutar audio
        audio.play().catch(error => {
            console.log("Autoplay dengan suara mungkin diblokir, coba membuka suara...");
            // Jika autoplay diblokir, biarkan audio tetap mute
            audio.muted = false; // Coba membuka suara
            audio.play().catch(error => {
                console.log("Autoplay tetap diblokir: " + error);
            });
        });
    };
    