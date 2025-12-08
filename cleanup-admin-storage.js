/**
 * Cleanup script for removing admin-related localStorage data
 * Run this in the browser console to clean up admin data
 */

(function cleanupAdminStorage() {
    console.log('Starting admin localStorage cleanup...');
    
    // List of admin-related localStorage keys to remove
    const adminKeys = [
        'admin_authenticated',
        'admin_session',
        'admin_token',
        'adminAuth',
        'admin_user',
        'admin_login'
    ];
    
    let removedCount = 0;
    
    // Remove each admin key if it exists
    adminKeys.forEach(key => {
        if (localStorage.getItem(key) !== null) {
            localStorage.removeItem(key);
            console.log(`✓ Removed: ${key}`);
            removedCount++;
        }
    });
    
    // Also check for any keys that contain 'admin' (case-insensitive)
    const allKeys = Object.keys(localStorage);
    allKeys.forEach(key => {
        if (key.toLowerCase().includes('admin') && !adminKeys.includes(key)) {
            localStorage.removeItem(key);
            console.log(`✓ Removed: ${key}`);
            removedCount++;
        }
    });
    
    if (removedCount === 0) {
        console.log('✓ No admin data found in localStorage');
    } else {
        console.log(`✓ Cleanup complete! Removed ${removedCount} admin-related items`);
    }
    
    console.log('Admin localStorage cleanup finished.');
})();
