use bevy::prelude::*;
use std::ops::{Deref, DerefMut};

pub struct ExperiencePlugin;

impl Plugin for ExperiencePlugin {
    fn build(&self, app: &mut AppBuilder) {
        app.init_resource::<PowerXp>()
            .init_resource::<SpecializationXp>();
    }
}

#[derive(Default)]
struct PowerXp {
    xp: u64,
}

impl Deref for PowerXp {
    type Target = u64;
    fn deref(&self) -> &Self::Target {
        &self.xp
    }
}

impl DerefMut for PowerXp {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.xp
    }
}

#[derive(Default)]
struct SpecializationXp {
    xp: u64,
}

impl Deref for SpecializationXp {
    type Target = u64;
    fn deref(&self) -> &Self::Target {
        &self.xp
    }
}

impl DerefMut for SpecializationXp {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.xp
    }
}
