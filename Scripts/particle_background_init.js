window.onload = function()
{
  Particles.init({
      selector: '.particles-background',
      maxParticles: '96',
      sizeVariations: '1',
      speed: '0.4',
      color: '#c9e8f0',
      minDistance: '110',
      connectParticles: 'true',

      responsive: [
          {
            breakpoint: 1600,
            options: 
            {
                maxParticles: 80,
            }
        },
        {
            breakpoint: 1400,
            options:
            {
                maxParticles: 70,
            }
        },
        {
            breakpoint: 1200,
            options:
            {
                maxParticles: 60,
            }
        },
        {
            breakpoint: 1000,
            options:
            {
                maxParticles: 50,
            }
        },
        {
            breakpoint: 800,
            options:
            {
                maxParticles: 40,
            }
        },
        {
            breakpoint: 600,
            options:
            {
                maxParticles: 30,
            }
        },
        {
            breakpoint: 400,
            options:
            {
                maxParticles: 20,
            }
        }]
  });
};