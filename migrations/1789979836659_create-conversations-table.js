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
    pgm.createTable('conversations' , {
        id: 'id',
        owner_id: {
            type: 'integer',
            notNull: true,
            refrences: 'owners',
            onDelete: 'CASCADE',
        },
        customer_phone: { type: 'text', notNull: true},
        needs_attention: { type: 'boolean', notNull: true, default:  false},
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()')},
 
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('conversations');
};
