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
    pgm.createTable('unmatched_webhook_events', {
        id: 'id',
        whatsapp_number: { type: 'text', notNull: true},
        raw_payload: { type: 'jsonb'},
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()')}
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('unmatched_webhook_events');
};
  