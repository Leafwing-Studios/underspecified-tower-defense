mod boons;
mod combat;
mod construction;
mod experience;
mod levels;
mod map;
mod structures;
mod units;

use bevy::prelude::*;

fn main() {
    App::build()
        .add_plugins(DefaultPlugins)
        .add_plugin(boons::BoonsPlugin)
        .add_plugin(combat::CombatPlugin)
        .add_plugin(construction::ConstructionPlugin)
        .add_plugin(experience::ExperiencePlugin)
        .add_plugin(levels::LevelsPlugin)
        .add_plugin(map::MapPlugin)
        .add_plugin(structures::StructuresPlugin)
        .add_plugin(units::UnitsPlugin)
        .run();
}
