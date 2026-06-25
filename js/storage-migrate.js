const StorageMigrate = (() => {
  function migrateLocalStorageKey(newKey, legacyKeys = []) {
    if (localStorage.getItem(newKey)) return;
    for (const legacyKey of legacyKeys) {
      const value = localStorage.getItem(legacyKey);
      if (value == null) continue;
      localStorage.setItem(newKey, value);
      return;
    }
  }

  function migrateSessionStorageKey(newKey, legacyKeys = []) {
    if (sessionStorage.getItem(newKey)) return;
    for (const legacyKey of legacyKeys) {
      const value = sessionStorage.getItem(legacyKey);
      if (value == null) continue;
      sessionStorage.setItem(newKey, value);
      return;
    }
  }

  return { migrateLocalStorageKey, migrateSessionStorageKey };
})();
