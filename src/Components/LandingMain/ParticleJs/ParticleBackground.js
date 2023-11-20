import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import particleConfig from './particleConfig'
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
    // console.log(particleConfig);
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        // <Particles options={particleConfig}>

        // </Particles>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
        />
    )

}

export default ParticleBackground