javascript:for (let i = 0, len = b.inventory.length; i < len; i++) {const target = b.guns[b.inventory[i]];if (target.ammo !== Infinity) {target.ammo = Infinity;}};simulation.updateGunHUD();
