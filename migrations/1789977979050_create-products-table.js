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
    pgm.createTable('products , ' {
        id: 'id',
        owner_id: {
            type: 'integer',
            notNull: true,
            references: 'owners',
            onDelete: 'CASCADE',
        },
        name: { type: 'text', notNull: true},
        price: { type: 'numeric(10, 2)', notNull: true},
        stock_status: { type: 'text', notNull: true},
        category: { type: 'text'},
        is_active: { type: boolean, notNull: true, default: 'in_stock'},
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()')}, 
    });
   
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('products');
};
