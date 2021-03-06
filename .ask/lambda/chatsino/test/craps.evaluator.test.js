const craps = require('../craps');

// TWO
test('[1,1,0].win contains ONEROLL_2', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); });
test('[1,1,4].win contains ONEROLL_2', () => { expect(craps.evaluator(1, 1, 4).win).toContain(craps.position.ONEROLL_2); });
test('[1,1,0].win contains HI_LO', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.HI_LO); });
test('[1,1,6].win contains HI_LO', () => { expect(craps.evaluator(1, 1, 6).win).toContain(craps.position.HI_LO); });
test('[1,1,0].win contains ANYCRAPS', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ANYCRAPS); });
test('[1,1,5].win contains ANYCRAPS', () => { expect(craps.evaluator(1, 1, 5).win).toContain(craps.position.ANYCRAPS); });
test('[1,1,0].win contains C_E', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.C_E); });
test('[1,1,10].win contains C_E', () => { expect(craps.evaluator(1, 1, 10).win).toContain(craps.position.C_E); });
test('[1,1,0].win contains DONTPASS', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.DONTPASS); });
test('[1,1,0].win contains DONTCOME', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.DONTCOME); });
test('[1,1,0].win contains FIELD', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.FIELD); });
test('[1,1,0].win contains HORN', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.HORN); });
test('[1,1,0].win contains WORLD', () => { expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.WORLD); });
test('[1,1,0].lose contains PASS', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.PASS); });
test('[1,1,0].lose contains COME', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.COME); });
test('[1,1,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[1,1,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,1,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,1,0].lose contains ANY_7', () => { expect(craps.evaluator(1, 1, 0).lose).toContain(craps.position.ANY_7); });

// THREE
test('[1,2,0].win contains ONEROLL_3', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.ONEROLL_3); });
test('[1,2,4].win contains ONEROLL_3', () => { expect(craps.evaluator(1, 2, 4).win).toContain(craps.position.ONEROLL_3); });
test('[1,2,0].win contains ANYCRAPS', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.ANYCRAPS); });
test('[1,2,5].win contains ANYCRAPS', () => { expect(craps.evaluator(1, 2, 5).win).toContain(craps.position.ANYCRAPS); });
test('[1,2,0].win contains C_E', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.C_E); });
test('[1,2,5].win contains C_E', () => { expect(craps.evaluator(1, 2, 5).win).toContain(craps.position.C_E); });
test('[1,2,0].win contains DONTPASS', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.DONTPASS); });
test('[1,2,0].win contains DONTCOME', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.DONTCOME); });
test('[1,2,0].win contains FIELD', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.FIELD); });
test('[1,2,0].win contains HORN', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.HORN); });
test('[1,2,0].win contains WORLD', () => { expect(craps.evaluator(1, 2, 0).win).toContain(craps.position.WORLD); });
test('[1,2,0].lose contains PASS', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.PASS); });
test('[1,2,0].lose contains COME', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.COME); });
test('[1,2,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[1,2,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,2,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,2,0].lose contains ANY_7', () => { expect(craps.evaluator(1, 2, 0).lose).toContain(craps.position.ANY_7); });

// FOUR
test('[2,2,4].win contains PASS', () => { expect(craps.evaluator(2, 2, 4).win).toContain(craps.position.PASS); });
test('[1,3,4].win contains COME', () => { expect(craps.evaluator(1, 3, 4).win).toContain(craps.position.COME); });
test('[1,3,4].win contains PASSODDS', () => { expect(craps.evaluator(1, 3, 4).win).toContain(craps.position.PASSODDS); });
test('[1,3,4].win contains COMEODDS', () => { expect(craps.evaluator(1, 3, 4).win).toContain(craps.position.COMEODDS); });
test('[1,3,0].win contains FIELD', () => { expect(craps.evaluator(1, 3, 0).win).toContain(craps.position.FIELD); });
test('[2,2,0].win contains HARD_4', () => { expect(craps.evaluator(2, 2, 0).win).toContain(craps.position.HARD_4); });
test('[2,2,5].win contains HARD_4', () => { expect(craps.evaluator(2, 2, 5).win).toContain(craps.position.HARD_4); });
test('[2,2,0].win contains PLACE_4', () => { expect(craps.evaluator(2, 2, 0).win).toContain(craps.position.PLACE_4); });
test('[1,3,6].win contains PLACE_4', () => { expect(craps.evaluator(1, 3, 6).win).toContain(craps.position.PLACE_4); });
test('[2,2,0].win contains BUY_4', () => { expect(craps.evaluator(2, 2, 0).win).toContain(craps.position.BUY_4); });
test('[1,3,6].win contains BUY_4', () => { expect(craps.evaluator(1, 3, 6).win).toContain(craps.position.BUY_4); });
test('[1,3,4].lose contains DONTPASS', () => { expect(craps.evaluator(1, 3, 4).lose).toContain(craps.position.DONTPASS); });
test('[1,3,4].lose contains DONTCOME', () => { expect(craps.evaluator(1, 3, 4).lose).toContain(craps.position.DONTCOME); });
test('[1,3,4].lose contains DONTPASSODDS', () => { expect(craps.evaluator(1, 3, 4).lose).toContain(craps.position.DONTPASSODDS); });
test('[1,3,4].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(1, 3, 4).lose).toContain(craps.position.DONTCOMEODDS); });
test('[1,3,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[1,3,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[1,3,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,3,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,3,0].lose contains C_E', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.C_E); });
test('[1,3,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[1,3,0].lose contains ANY_7', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.ANY_7); });
test('[1,3,0].lose contains HORN', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.HORN); });
test('[1,3,0].lose contains WORLD', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.WORLD); });
test('[1,3,0].lose contains HARD_4', () => { expect(craps.evaluator(1, 3, 0).lose).toContain(craps.position.HARD_4); });
test('[3,1,0].lose contains HARD_4', () => { expect(craps.evaluator(3, 1, 0).lose).toContain(craps.position.HARD_4); });
test('[3,1,0].lose contains LAY_4', () => { expect(craps.evaluator(3, 1, 0).lose).toContain(craps.position.LAY_4); });

// FIVE
test('[2,3,5].win contains PASS', () => { expect(craps.evaluator(2, 3, 5).win).toContain(craps.position.PASS); });
test('[2,3,5].win contains COME', () => { expect(craps.evaluator(2, 3, 5).win).toContain(craps.position.COME); });
test('[2,3,5].win contains PASSODDS', () => { expect(craps.evaluator(2, 3, 5).win).toContain(craps.position.PASSODDS); });
test('[2,3,5].win contains COMEODDS', () => { expect(craps.evaluator(2, 3, 5).win).toContain(craps.position.COMEODDS); });
test('[2,3,0].win contains PLACE_5', () => { expect(craps.evaluator(2, 3, 0).win).toContain(craps.position.PLACE_5); });
test('[1,4,6].win contains PLACE_5', () => { expect(craps.evaluator(1, 4, 6).win).toContain(craps.position.PLACE_5); });
test('[2,3,0].win contains BUY_5', () => { expect(craps.evaluator(2, 3, 0).win).toContain(craps.position.BUY_5); });
test('[1,4,6].win contains BUY_5', () => { expect(craps.evaluator(1, 4, 6).win).toContain(craps.position.BUY_5); });
test('[2,3,5].lose contains DONTPASS', () => { expect(craps.evaluator(2, 3, 5).lose).toContain(craps.position.DONTPASS); });
test('[2,3,5].lose contains DONTCOME', () => { expect(craps.evaluator(2, 3, 5).lose).toContain(craps.position.DONTCOME); });
test('[2,3,5].lose contains DONTPASSODDS', () => { expect(craps.evaluator(2, 3, 5).lose).toContain(craps.position.DONTPASSODDS); });
test('[2,3,5].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(2, 3, 5).lose).toContain(craps.position.DONTCOMEODDS); });
test('[1,4,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[1,4,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[1,4,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,4,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,4,0].lose contains C_E', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.C_E); });
test('[1,4,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[1,4,0].lose contains ANY_7', () => { expect(craps.evaluator(1, 4, 0).lose).toContain(craps.position.ANY_7); });
test('[2,3,0].lose contains FIELD', () => { expect(craps.evaluator(2, 3, 0).lose).toContain(craps.position.FIELD); });
test('[2,3,0].lose contains HORN', () => { expect(craps.evaluator(2, 3, 0).lose).toContain(craps.position.HORN); });
test('[2,3,0].lose contains WORLD', () => { expect(craps.evaluator(2, 3, 0).lose).toContain(craps.position.WORLD); });
test('[2,3,0].lose contains LAY_5', () => { expect(craps.evaluator(2, 3, 0).lose).toContain(craps.position.LAY_5); });

// SIX
test('[3,3,6].win contains PASS', () => { expect(craps.evaluator(3, 3, 6).win).toContain(craps.position.PASS); });
test('[2,4,6].win contains COME', () => { expect(craps.evaluator(2, 4, 6).win).toContain(craps.position.COME); });
test('[3,3,6].win contains PASSODDS', () => { expect(craps.evaluator(3, 3, 6).win).toContain(craps.position.PASSODDS); });
test('[2,4,6].win contains COMEODDS', () => { expect(craps.evaluator(2, 4, 6).win).toContain(craps.position.COMEODDS); });
test('[3,3,0].win contains HARD_6', () => { expect(craps.evaluator(3, 3, 0).win).toContain(craps.position.HARD_6); });
test('[3,3,5].win contains HARD_6', () => { expect(craps.evaluator(3, 3, 5).win).toContain(craps.position.HARD_6); });
test('[3,3,0].win contains BIG_6', () => { expect(craps.evaluator(3, 3, 0).win).toContain(craps.position.BIG_6); });
test('[2,4,0].win contains BIG_6', () => { expect(craps.evaluator(2, 4, 0).win).toContain(craps.position.BIG_6); });
test('[1,5,0].win contains BIG_6', () => { expect(craps.evaluator(1, 5, 0).win).toContain(craps.position.BIG_6); });
test('[3,3,0].win contains PLACE_6', () => { expect(craps.evaluator(3, 3, 0).win).toContain(craps.position.PLACE_6); });
test('[1,5,6].win contains PLACE_6', () => { expect(craps.evaluator(1, 5, 6).win).toContain(craps.position.PLACE_6); });
test('[3,3,0].win contains BUY_6', () => { expect(craps.evaluator(3, 3, 0).win).toContain(craps.position.BUY_6); });
test('[1,5,6].win contains BUY_6', () => { expect(craps.evaluator(1, 5, 6).win).toContain(craps.position.BUY_6); });
test('[3,3,6].lose contains DONTPASS', () => { expect(craps.evaluator(3, 3, 6).lose).toContain(craps.position.DONTPASS); });
test('[3,3,6].lose contains DONTCOME', () => { expect(craps.evaluator(3, 3, 6).lose).toContain(craps.position.DONTCOME); });
test('[3,3,6].lose contains DONTPASSODDS', () => { expect(craps.evaluator(3, 3, 6).lose).toContain(craps.position.DONTPASSODDS); });
test('[3,3,6].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(3, 3, 6).lose).toContain(craps.position.DONTCOMEODDS); });
test('[1,5,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[1,5,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[1,5,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,5,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,5,0].lose contains C_E', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.C_E); });
test('[1,5,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[1,5,0].lose contains ANY_7', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.ANY_7); });
test('[3,3,0].lose contains FIELD', () => { expect(craps.evaluator(3, 3, 0).lose).toContain(craps.position.FIELD); });
test('[3,3,0].lose contains HORN', () => { expect(craps.evaluator(3, 3, 0).lose).toContain(craps.position.HORN); });
test('[3,3,0].lose contains WORLD', () => { expect(craps.evaluator(3, 3, 0).lose).toContain(craps.position.WORLD); });
test('[2,4,0].lose contains HARD_6', () => { expect(craps.evaluator(2, 4, 0).lose).toContain(craps.position.HARD_6); });
test('[1,5,0].lose contains HARD_6', () => { expect(craps.evaluator(1, 5, 0).lose).toContain(craps.position.HARD_6); });
test('[2,4,0].lose contains LAY_6', () => { expect(craps.evaluator(2, 4, 0).lose).toContain(craps.position.LAY_6); });

// SEVEN
test('[3,4,0].win contains PASS', () => { expect(craps.evaluator(3, 4, 0).win).toContain(craps.position.PASS); });
test('[2,5,0].win contains COME', () => { expect(craps.evaluator(2, 5, 0).win).toContain(craps.position.COME); });
test('[3,4,4].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 4).win).toContain(craps.position.DONTPASS); });
test('[3,4,5].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 6).win).toContain(craps.position.DONTPASS); });
test('[3,4,6].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 9).win).toContain(craps.position.DONTPASS); });
test('[3,4,8].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 8).win).toContain(craps.position.DONTPASS); });
test('[3,4,9].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 9).win).toContain(craps.position.DONTPASS); });
test('[3,4,10].win contains DONTPASS', () => { expect(craps.evaluator(3, 4, 10).win).toContain(craps.position.DONTPASS); });
test('[3,4,4].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 4).win).toContain(craps.position.DONTCOME); });
test('[3,4,5].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 5).win).toContain(craps.position.DONTCOME); });
test('[3,4,6].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 6).win).toContain(craps.position.DONTCOME); });
test('[3,4,8].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 8).win).toContain(craps.position.DONTCOME); });
test('[3,4,9].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 9).win).toContain(craps.position.DONTCOME); });
test('[3,4,10].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 10).win).toContain(craps.position.DONTCOME); });
test('[3,4,10].win contains DONTCOME', () => { expect(craps.evaluator(3, 4, 10).win).toContain(craps.position.DONTCOME); });
test('[2,5,0].win contains ANY_7', () => { expect(craps.evaluator(2, 5, 0).win).toContain(craps.position.ANY_7); });
test('[2,5,0].win contains ANY_7', () => { expect(craps.evaluator(2, 5, 4).win).toContain(craps.position.ANY_7); });
test('[2,5,0].win contains WORLD', () => { expect(craps.evaluator(2, 5, 0).win).toContain(craps.position.WORLD); });
test('[2,5,0].win DOES NOT contain LAY_4', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_4); });
test('[2,5,0].win DOES NOT contain LAY_5', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_5); });
test('[2,5,0].win DOES NOT contain LAY_6', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_6); });
test('[2,5,0].win DOES NOT contain LAY_8', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_8); });
test('[2,5,0].win DOES NOT contain LAY_9', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_9); });
test('[2,5,0].win DOES NOT contain LAY_10', () => { expect(craps.evaluator(2, 5, 0).win).not.toContain(craps.position.LAY_10); });
test('[2,5,6].win contains LAY_4', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_4); });
test('[2,5,6].win contains LAY_5', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_5); });
test('[2,5,6].win contains LAY_6', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_6); });
test('[2,5,6].win contains LAY_8', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_8); });
test('[2,5,6].win contains LAY_9', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_9); });
test('[2,5,6].win contains LAY_10', () => { expect(craps.evaluator(2, 5, 6).win).toContain(craps.position.LAY_10); });
test('[3,4,0].lose contains DONTPASS', () => { expect(craps.evaluator(3, 4, 0).lose).toContain(craps.position.DONTPASS); });
test('[3,4,0].lose contains DONTCOME', () => { expect(craps.evaluator(3, 4, 0).lose).toContain(craps.position.DONTCOME); });
test('[3,4,4].lose contains PASS', () => { expect(craps.evaluator(3, 4, 4).lose).toContain(craps.position.PASS); });
test('[3,4,5].lose contains COME', () => { expect(craps.evaluator(3, 4, 5).lose).toContain(craps.position.COME); });
test('[3,4,6].lose contains PASS', () => { expect(craps.evaluator(3, 4, 6).lose).toContain(craps.position.PASS); });
test('[3,4,8].lose contains COME', () => { expect(craps.evaluator(3, 4, 8).lose).toContain(craps.position.COME); });
test('[3,4,9].lose contains PASS', () => { expect(craps.evaluator(3, 4, 9).lose).toContain(craps.position.PASS); });
test('[3,4,10].lose contains COME', () => { expect(craps.evaluator(3, 4, 10).lose).toContain(craps.position.COME); });
test('[3,4,4].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 4).lose).toContain(craps.position.PASSODDS); });
test('[3,4,5].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 5).lose).toContain(craps.position.PASSODDS); });
test('[3,4,6].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 6).lose).toContain(craps.position.PASSODDS); });
test('[3,4,8].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 8).lose).toContain(craps.position.PASSODDS); });
test('[3,4,9].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 9).lose).toContain(craps.position.PASSODDS); });
test('[3,4,10].lose contains PASSODDS', () => { expect(craps.evaluator(3, 4, 10).lose).toContain(craps.position.PASSODDS); });
test('[3,4,4].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 4).lose).toContain(craps.position.COMEODDS); });
test('[3,4,5].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 5).lose).toContain(craps.position.COMEODDS); });
test('[3,4,6].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 6).lose).toContain(craps.position.COMEODDS); });
test('[3,4,8].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 8).lose).toContain(craps.position.COMEODDS); });
test('[3,4,9].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 9).lose).toContain(craps.position.COMEODDS); });
test('[3,4,10].lose contains COMEODDS', () => { expect(craps.evaluator(3, 4, 10).lose).toContain(craps.position.COMEODDS); });
test('[1,6,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[1,6,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[1,6,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[1,6,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[1,6,0].lose contains C_E', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.C_E); });
test('[1,6,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[2,5,0].lose contains FIELD', () => { expect(craps.evaluator(2, 5, 0).lose).toContain(craps.position.FIELD); });
test('[2,5,0].lose contains HORN', () => { expect(craps.evaluator(2, 5, 0).lose).toContain(craps.position.HORN); });
test('[2,5,0].lose DOES NOT contain HARD_4', () => { expect(craps.evaluator(2, 5, 0).lose).not.toContain(craps.position.HARD_4); });
test('[2,5,0].lose DOES NOT contain HARD_6', () => { expect(craps.evaluator(2, 5, 0).lose).not.toContain(craps.position.HARD_6); });
test('[2,5,0].lose DOES NOT contain HARD_8', () => { expect(craps.evaluator(2, 5, 0).lose).not.toContain(craps.position.HARD_8); });
test('[1,6,0].lose DOES NOT contain HARD_10', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.HARD_10); });
test('[2,5,4].lose contains HARD_4', () => { expect(craps.evaluator(2, 5, 4).lose).toContain(craps.position.HARD_4); });
test('[2,5,4].lose contains HARD_6', () => { expect(craps.evaluator(2, 5, 4).lose).toContain(craps.position.HARD_6); });
test('[2,5,4].lose contains HARD_8', () => { expect(craps.evaluator(2, 5, 4).lose).toContain(craps.position.HARD_8); });
test('[1,6,4].lose contains HARD_10', () => { expect(craps.evaluator(1, 6, 4).lose).toContain(craps.position.HARD_10); });
test('[1,6,0].lose contains BIG_6', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.BIG_6); });
test('[1,6,0].lose contains BIG_8', () => { expect(craps.evaluator(1, 6, 0).lose).toContain(craps.position.BIG_8); });
test('[1,6,0].lose DOES NOT contain PLACE_4', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_4); });
test('[1,6,0].lose DOES NOT contain PLACE_5', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_5); });
test('[1,6,0].lose DOES NOT contain PLACE_6', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_6); });
test('[1,6,0].lose DOES NOT contain PLACE_8', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_8); });
test('[1,6,0].lose DOES NOT contain PLACE_9', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_9); });
test('[1,6,0].lose DOES NOT contain PLACE_10', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.PLACE_10); });
test('[1,6,5].lose contains PLACE_4', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.PLACE_4); });
test('[1,6,6].lose contains PLACE_5', () => { expect(craps.evaluator(1, 6, 6).lose).toContain(craps.position.PLACE_5); });
test('[1,6,8].lose contains PLACE_6', () => { expect(craps.evaluator(1, 6, 8).lose).toContain(craps.position.PLACE_6); });
test('[1,6,9].lose contains PLACE_8', () => { expect(craps.evaluator(1, 6, 9).lose).toContain(craps.position.PLACE_8); });
test('[1,6,4].lose contains PLACE_9', () => { expect(craps.evaluator(1, 6, 4).lose).toContain(craps.position.PLACE_9); });
test('[1,6,5].lose contains PLACE_10', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.PLACE_10); });
test('[1,6,0].lose DOES NOT contain BUY_4', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_4); });
test('[1,6,0].lose DOES NOT contain BUY_5', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_5); });
test('[1,6,0].lose DOES NOT contain BUY_6', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_6); });
test('[1,6,0].lose DOES NOT contain BUY_8', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_8); });
test('[1,6,0].lose DOES NOT contain BUY_9', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_9); });
test('[1,6,0].lose DOES NOT contain BUY_10', () => { expect(craps.evaluator(1, 6, 0).lose).not.toContain(craps.position.BUY_10); });
test('[1,6,5].lose contains BUY_4', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_4); });
test('[1,6,5].lose contains BUY_5', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_5); });
test('[1,6,5].lose contains BUY_6', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_6); });
test('[1,6,5].lose contains BUY_8', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_8); });
test('[1,6,5].lose contains BUY_9', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_9); });
test('[1,6,5].lose contains BUY_10', () => { expect(craps.evaluator(1, 6, 5).lose).toContain(craps.position.BUY_10); });

// EIGHT
test('[4,4,8].win contains PASS', () => { expect(craps.evaluator(4, 4, 8).win).toContain(craps.position.PASS); });
test('[3,5,8].win contains COME', () => { expect(craps.evaluator(3, 5, 8).win).toContain(craps.position.COME); });
test('[4,4,8].win contains PASSODDS', () => { expect(craps.evaluator(4, 4, 8).win).toContain(craps.position.PASSODDS); });
test('[3,5,8].win contains COMEODDS', () => { expect(craps.evaluator(3, 5, 8).win).toContain(craps.position.COMEODDS); });
test('[4,4,0].win contains HARD_8', () => { expect(craps.evaluator(4, 4, 0).win).toContain(craps.position.HARD_8); });
test('[4,4,5].win contains HARD_8', () => { expect(craps.evaluator(4, 4, 5).win).toContain(craps.position.HARD_8); });
test('[4,4,0].win contains BIG_8', () => { expect(craps.evaluator(4, 4, 0).win).toContain(craps.position.BIG_8); });
test('[3,5,0].win contains BIG_8', () => { expect(craps.evaluator(3, 5, 0).win).toContain(craps.position.BIG_8); });
test('[2,6,0].win contains BIG_8', () => { expect(craps.evaluator(2, 6, 0).win).toContain(craps.position.BIG_8); });
test('[4,4,0].win contains PLACE_8', () => { expect(craps.evaluator(4, 4, 0).win).toContain(craps.position.PLACE_8); });
test('[2,6,6].win contains PLACE_8', () => { expect(craps.evaluator(2, 6, 6).win).toContain(craps.position.PLACE_8); });
test('[4,4,0].win contains BUY_8', () => { expect(craps.evaluator(4, 4, 0).win).toContain(craps.position.BUY_8); });
test('[2,6,6].win contains BUY_8', () => { expect(craps.evaluator(2, 6, 6).win).toContain(craps.position.BUY_8); });
test('[4,4,8].lose contains DONTPASS', () => { expect(craps.evaluator(4, 4, 8).lose).toContain(craps.position.DONTPASS); });
test('[4,4,8].lose contains DONTCOME', () => { expect(craps.evaluator(4, 4, 8).lose).toContain(craps.position.DONTCOME); });
test('[4,4,8].lose contains DONTPASSODDS', () => { expect(craps.evaluator(4, 4, 8).lose).toContain(craps.position.DONTPASSODDS); });
test('[4,4,8].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(4, 4, 8).lose).toContain(craps.position.DONTCOMEODDS); });
test('[4,4,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[4,4,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[4,4,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[4,4,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[4,4,0].lose contains C_E', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.C_E); });
test('[4,4,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(4, 4, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[3,5,0].lose contains ANY_7', () => { expect(craps.evaluator(3, 5, 0).lose).toContain(craps.position.ANY_7); });
test('[3,5,0].lose contains FIELD', () => { expect(craps.evaluator(3, 5, 0).lose).toContain(craps.position.FIELD); });
test('[3,5,0].lose contains HORN', () => { expect(craps.evaluator(3, 5, 0).lose).toContain(craps.position.HORN); });
test('[3,5,0].lose contains WORLD', () => { expect(craps.evaluator(3, 5, 0).lose).toContain(craps.position.WORLD); });
test('[3,5,0].lose contains HARD_8', () => { expect(craps.evaluator(3, 5, 0).lose).toContain(craps.position.HARD_8); });
test('[2,6,0].lose contains HARD_8', () => { expect(craps.evaluator(2, 6, 0).lose).toContain(craps.position.HARD_8); });
test('[2,6,0].lose contains LAY_8', () => { expect(craps.evaluator(2, 6, 0).lose).toContain(craps.position.LAY_8); });

// NINE
test('[4,5,9].win contains PASS', () => { expect(craps.evaluator(4, 5, 9).win).toContain(craps.position.PASS); });
test('[3,6,9].win contains COME', () => { expect(craps.evaluator(3, 6, 9).win).toContain(craps.position.COME); });
test('[4,5,9].win contains PASSODDS', () => { expect(craps.evaluator(4, 5, 9).win).toContain(craps.position.PASSODDS); });
test('[3,6,9].win contains COMEODDS', () => { expect(craps.evaluator(3, 6, 9).win).toContain(craps.position.COMEODDS); });
test('[3,6,0].win contains FIELD', () => { expect(craps.evaluator(3, 6, 0).win).toContain(craps.position.FIELD); });
test('[4,5,0].win contains PLACE_9', () => { expect(craps.evaluator(4, 5, 0).win).toContain(craps.position.PLACE_9); });
test('[3,6,6].win contains PLACE_9', () => { expect(craps.evaluator(3, 6, 6).win).toContain(craps.position.PLACE_9); });
test('[4,5,0].win contains BUY_9', () => { expect(craps.evaluator(4, 5, 0).win).toContain(craps.position.BUY_9); });
test('[3,6,6].win contains BUY_9', () => { expect(craps.evaluator(3, 6, 6).win).toContain(craps.position.BUY_9); });
test('[4,5,9].lose contains DONTPASS', () => { expect(craps.evaluator(4, 5, 9).lose).toContain(craps.position.DONTPASS); });
test('[4,5,9].lose contains DONTCOME', () => { expect(craps.evaluator(4, 5, 9).lose).toContain(craps.position.DONTCOME); });
test('[4,5,9].lose contains DONTPASSODDS', () => { expect(craps.evaluator(4, 5, 9).lose).toContain(craps.position.DONTPASSODDS); });
test('[4,5,9].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(4, 5, 9).lose).toContain(craps.position.DONTCOMEODDS); });
test('[4,5,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[4,5,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[4,5,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[4,5,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[4,5,0].lose contains C_E', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.C_E); });
test('[4,5,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[4,5,0].lose contains ANY_7', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.ANY_7); });
test('[4,5,0].lose contains HORN', () => { expect(craps.evaluator(4, 5, 0).lose).toContain(craps.position.HORN); });
test('[3,6,0].lose contains WORLD', () => { expect(craps.evaluator(3, 6, 0).lose).toContain(craps.position.WORLD); });
test('[3,6,0].lose contains LAY_9', () => { expect(craps.evaluator(3, 6, 0).lose).toContain(craps.position.LAY_9); });

// TEN
test('[5,5,10].win contains PASS', () => { expect(craps.evaluator(5, 5, 10).win).toContain(craps.position.PASS); });
test('[4,6,10].win contains COME', () => { expect(craps.evaluator(4, 6, 10).win).toContain(craps.position.COME); });
test('[5,5,10].win contains PASSODDS', () => { expect(craps.evaluator(5, 5, 10).win).toContain(craps.position.PASSODDS); });
test('[4,6,10].win contains COMEODDS', () => { expect(craps.evaluator(4, 6, 10).win).toContain(craps.position.COMEODDS); });
test('[4,6,0].win contains FIELD', () => { expect(craps.evaluator(4, 6, 0).win).toContain(craps.position.FIELD); });
test('[5,5,0].win contains HARD_10', () => { expect(craps.evaluator(5, 5, 0).win).toContain(craps.position.HARD_10); });
test('[5,5,8].win contains HARD_10', () => { expect(craps.evaluator(5, 5, 8).win).toContain(craps.position.HARD_10); });
test('[5,5,0].win contains PLACE_10', () => { expect(craps.evaluator(5, 5, 0).win).toContain(craps.position.PLACE_10); });
test('[4,6,6].win contains PLACE_10', () => { expect(craps.evaluator(4, 6, 6).win).toContain(craps.position.PLACE_10); });
test('[5,5,0].win contains BUY_10', () => { expect(craps.evaluator(5, 5, 0).win).toContain(craps.position.BUY_10); });
test('[4,6,6].win contains BUY_10', () => { expect(craps.evaluator(4, 6, 6).win).toContain(craps.position.BUY_10); });
test('[5,5,10].lose contains DONTPASS', () => { expect(craps.evaluator(5, 5, 10).lose).toContain(craps.position.DONTPASS); });
test('[5,5,10].lose contains DONTCOME', () => { expect(craps.evaluator(5, 5, 10).lose).toContain(craps.position.DONTCOME); });
test('[5,5,10].lose contains DONTPASSODDS', () => { expect(craps.evaluator(5, 5, 10).lose).toContain(craps.position.DONTPASSODDS); });
test('[5,5,10].lose contains DONTCOMEODDS', () => { expect(craps.evaluator(5, 5, 10).lose).toContain(craps.position.DONTCOMEODDS); });
test('[5,5,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[5,5,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[5,5,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[5,5,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[5,5,0].lose contains C_E', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.C_E); });
test('[5,5,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[5,5,0].lose contains ANY_7', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.ANY_7); });
test('[5,5,0].lose contains HORN', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.HORN); });
test('[5,5,0].lose contains WORLD', () => { expect(craps.evaluator(5, 5, 0).lose).toContain(craps.position.WORLD); });
test('[4,6,0].lose contains HARD_10', () => { expect(craps.evaluator(4, 6, 0).lose).toContain(craps.position.HARD_10); });
test('[4,6,0].lose contains LAY_10', () => { expect(craps.evaluator(4, 6, 0).lose).toContain(craps.position.LAY_10); });

// ELEVEN
test('[5,6,0].win contains ONEROLL_11', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.ONEROLL_11); });
test('[5,6,4].win contains ONEROLL_11', () => { expect(craps.evaluator(5, 6, 4).win).toContain(craps.position.ONEROLL_11); });
test('[5,6,0].win contains PASS', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.PASS); });
test('[5,6,0].win contains COME', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.COME); });
test('[5,6,0].win contains C_E', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.C_E); });
test('[5,6,4].win contains C_E', () => { expect(craps.evaluator(5, 6, 4).win).toContain(craps.position.C_E); });
test('[5,6,0].win contains FIELD', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.FIELD); });
test('[5,6,0].win contains HORN', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.HORN); });
test('[5,6,0].win contains WORLD', () => { expect(craps.evaluator(5, 6, 0).win).toContain(craps.position.WORLD); });
test('[5,6,0].lose contains DONTPASS', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.DONTPASS); });
test('[5,6,0].lose contains DONTCOME', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.DONTCOME); });
test('[5,6,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[5,6,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[5,6,0].lose contains ONEROLL_12', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.ONEROLL_12); });
test('[5,6,0].lose contains ANYCRAPS', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.ANYCRAPS); });
test('[5,6,0].lose contains ANY_7', () => { expect(craps.evaluator(5, 6, 0).lose).toContain(craps.position.ANY_7); });

// TWELVE
test('[6,6,0].win contains ONEROLL_12', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.ONEROLL_12); });
test('[6,6,9].win contains ONEROLL_12', () => { expect(craps.evaluator(6, 6, 9).win).toContain(craps.position.ONEROLL_12); });
test('[6,6,0].win contains ANYCRAPS', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.ANYCRAPS); });
test('[6,6,5].win contains ANYCRAPS', () => { expect(craps.evaluator(6, 6, 6).win).toContain(craps.position.ANYCRAPS); });
test('[6,6,0].win contains HI_LO', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.HI_LO); });
test('[6,6,8].win contains HI_LO', () => { expect(craps.evaluator(6, 6, 8).win).toContain(craps.position.HI_LO); });
test('[6,6,0].win contains C_E', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.C_E); });
test('[6,6,8].win contains C_E', () => { expect(craps.evaluator(6, 6, 8).win).toContain(craps.position.C_E); });
test('[6,6,0].win contains FIELD', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.FIELD); });
test('[6,6,0].win contains HORN', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.HORN); });
test('[6,6,0].win contains WORLD', () => { expect(craps.evaluator(6, 6, 0).win).toContain(craps.position.WORLD); });
test('[6,6,0].lose contains PASS', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.PASS); });
test('[6,6,0].lose contains COME', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.COME); });
test('[6,6,0].lose contains ONEROLL_2', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.ONEROLL_2); });
test('[6,6,0].lose contains ONEROLL_3', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.ONEROLL_3); });
test('[6,6,0].lose contains ONEROLL_11', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.ONEROLL_11); });
test('[6,6,0].lose contains ANY_7', () => { expect(craps.evaluator(6, 6, 0).lose).toContain(craps.position.ANY_7); });
