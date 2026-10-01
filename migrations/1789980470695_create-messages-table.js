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
    pgm.createTable('messages', {
        id: 'id',
        conversation_id: {
            type: 'integer',
            notNull: true,
            refrences: 'conversations',
            onDelete: 'CASCADE',
        },
        role : { type: 'text', notNull: true},
        content: { type: 'text', notNull: true},
        created_at: { type: 'timestamp', notNull : true , default: pgm.func('now()')},

    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('messages');
};
