# Mechanics
- metanarrative progression
  - failure still leads to progression
  - negative feedback loop on difficulty
  - gain power XP by playing the game
  - power XP upgrades improve power in interesting but straightforward ways
  - after playing a stage, bonus XP granted to a completed map at random, based on performance
    - works like rested xp
    - encourages variation
    - creates player prompts
    - good hook 
    - random by stage, not by variant
	- persists indefinitely
  - gain vanity XP based on single best performance on each map variant
  - vanity XP can be spent to target specific within-stage upgrades, or to unlock more rerolls on within-stage upgrades
  - unlock more towers and dynamic upgrades at the same time as unlocking maps
- within-stage dynamic specialization of player power
  - choose upgrades for towers etc
  - upgrades cause noticeable specialization
  - randomly available each run
  - (anti- save scumming mechanics)
  - have X rerolls on your upgrades pool determined by vanity xp
  - gain a few at the start of the map, then gain more every handful of waves
- map variations using randomizer elements
  - modifies game rules (like relics in sts) or enemies
  - pushes dynamic exploration
  - (difficulty signaling)
  - (Kaizo variants: only unlocked when you achieve enough summed vanity XP across other variants)
- infinite waves, with convex-up difficulty scaling
  - enemies always eventually outscale the player
  - nominal stage end
  - diminishing returns after nominal end: stop gaining power XP
- diverse player tools
  - towers
  - traps
  - melee towers
  - unit spawners
  - (pheromones)
- emphasis on tower interactions
  - lean into emergent simulationism ala Noita
  - can also interact with nearby core
- sell for complete value, but use rolling respec instead to limit changes
  - this is better because:
    - allows better experimention
    - prevents buyer's remorse
    - discourages restarting level if your build is bad
    - allows players to move towers for free
  - can only buy/sell between waves
  - selling something placed during the current build phase is free
    - the actual evaultion should be based on total changes since last snapshot
- tower destruction
  - towers can be damaged but heal fully between waves
  - towers that are destroyed are incapacitated for one wave
    - can't be sold
    - if a tower breaks on wave `n`, it is untouchable for build phase `n+1` and useless for wave `n+1`, but back to normal at (start of) build phase `n+2`
- allow for limited number of resets (per wave (per map?)) to beginning of build phase
- tower costs do not need high granularity
  - small numbers are good (cost 1, 2, or 3 is probably optimal)
  - steal tech from subset games
  - currency generation should scale by number of cores, but more cores should still be harder to defend than fewer cores
  - need some way to disincentivize making a million towers
  - must have something to do (i.e. something to spend money on) for each build phase
- mid-wave tower upgrades
  - towers have a linear power scale (that you spend power xp on)
  - can buy upgrades mid-wave to increase the power of all towers of a type
  - as a result, mid-wave upgrades are liner cost, but non-liner power output
  - this has the nice mathematical property of making the optimal strategy to increase tower count and tower upgrade level in tandem (ish)
  - power xp between maps increases the starting level for all towers of that type
- Multiple cores
  - encourages clusters in strategic locations
  - soft failure: you can loose a core without loosing the game
  - cores have unique support abilities
  - number of cores on a map as a difficulty tuning lever
- Map vantages
  - Multiple cores get a lot of the desired behavior, but standard map vantages are still useful as a bonus
- Different enemy commanders
  - The enemy has a "macro AI" that has different strategies for breaking through your defenses (aggro, timing, hammer & anvil, double-down, etc.)
  - Macro AI adapts strategically to fit their "playstyle"
  - AI tries to hit different cores
  - Telegraphing
    - Opening cutscene: very anime villain that mostly gives away their strat
    - Barks
      - Spotting certain towers (and not liking them)
      - Wanting certain resources
      - Bragging about how cool their units are (what they do)
  - In addition (and to give the commander more tools to play with):
    - diverse enemy movement patterns
    - diverse enemy tactics
      - use agent-based flocking AI
      - hit-and-run, tower destruction
- fuck micro, all my homies hate micro
  - direct strike, auto-chess, etc.
- full pausing
  - pause whenever
  - instant pausing
  - pan around and look at things while paused
  - waves do not autostart

## Open Questions
- enemy objectives?
- how do we accomplish softer / smoother feedback on player success?
  - lives suck
  - losing resources is worse
- mazing or not?

# Thematics
- (copying defeated enemies)

## Open Questions
- core themes?

# Anti-mechanics
- mandatory real-time mechanics
- investment mechanics
  - passive gold income
  - more risk to more in game reward
- limited build time

# Anti-thematics
- gore
- really annoying sounds
