var _ = require('lodash');

/**
 * Custom reporter that dumps a MUCH lighter JSON report out
 * Built using the original JSON reporter as a template
 *
 * @param {Object} newman - The collection run object, with event hooks for reporting run details.
 * @param {Object} options - A set of collection run options.
 * @param {String} options.export - The path to which the summary object must be written.
 * @returns {*}
 */

function createRunSummary(summary) {
    return _.pick(summary, ['run']);
}

module.exports = function(newman, options) {
    newman.on('beforeDone', function(err, o) {
        newman.exports.push({
            name: 'newman-reporter-json-run-only',
            default: 'newman-run-report.json',
            path:  options.jsonExport,
            content: JSON.stringify(createRunSummary(o.summary), 0, 2)
        });
    });
};
