use bevy::prelude::*;

pub struct ConstructionPlugin;

impl Plugin for ConstructionPlugin {
    fn build(&self, app: &mut AppBuilder) {
        app.init_resource::<Gold>();
    }
}

#[derive(Default)]
struct Gold {
    value: u64,
}

impl Deref for Gold {
    type Target = u64;
    fn deref(&self) -> &Self::Target {
        &self.value
    }
}

impl DerefMut for Gold {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.value
    }
}
