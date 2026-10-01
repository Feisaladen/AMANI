/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
     pgm.createTable('owners' , {
        id: 'id',
        business_name: { type: 'text', notNull: true},
        whatsapp_number: { type: 'text', notNull: true},
        email: { type: 'text', notNull: true , unique: true},
        firebase_id: { type: 'text'},
        is_active: { type: 'boolean', notNull: true, default: true},
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()')}
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('owners');
};
