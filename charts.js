// Act 1: Scale and Value
vegaEmbed('#vis1', 'vis1_map.json').catch(console.error);
vegaEmbed('#vis2', 'vis2_stacked_bar.json').catch(console.error);
vegaEmbed('#vis3', 'vis3_waffle.json').catch(console.error);

// Act 2: Environmental Stressors
vegaEmbed('#vis4', 'vis4_thermal_map.json').catch(console.error);
vegaEmbed('#vis5', 'vis5_temperature_line.json').catch(console.error);
vegaEmbed('#vis6', 'vis6_interactive_dashboard.json').catch(console.error);

// Act 3: Shifting Baselines and Damage
vegaEmbed('#vis7', 'vis7_treemap.json').catch(console.error);
vegaEmbed('#vis8', 'vis8_diverging_bar.json').catch(console.error);
vegaEmbed('#vis9', 'vis9_cyclone_map.json').catch(console.error);

// Act 4: Conservation Outcomes
vegaEmbed('#vis10', 'vis10_slope_graph.json').catch(console.error);

// ── SCROLL ANIMATION TRIGGER ──
// This forces your CSS to switch from opacity 0 to opacity 1 when scrolling
document.addEventListener("DOMContentLoaded", function () {
    const acts = document.querySelectorAll(".act");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.05 }); // Triggers when 5% of the section is visible

    acts.forEach(act => observer.observe(act));
});