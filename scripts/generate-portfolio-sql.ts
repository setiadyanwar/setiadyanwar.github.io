
import fs from 'fs';
import path from 'path';
import { portfolioItems } from "../lib/data";

function escapeSql(str: string | undefined): string {
    if (typeof str !== 'string') return 'NULL';
    // Escape single quotes by doubling them
    return `'${str.replace(/'/g, "''")}'`;
}

function generateSql() {
    let sql = `-- Portfolio Content Update SQL Generated at ${new Date().toISOString()}\n\n`;

    for (const item of portfolioItems) {
        sql += `-- Update item: ${item.title} (${item.id})\n`;
        sql += `UPDATE portfolio_items SET\n`;
        sql += `  overview_heading = ${escapeSql(item.overviewHeading)},\n`;
        sql += `  description = ${escapeSql(item.description)},\n`;
        sql += `  role = ${escapeSql(item.role)},\n`;
        sql += `  challenges = ${escapeSql(item.challenges)},\n`;
        sql += `  problem_description = ${escapeSql(item.problemDescription)},\n`;
        sql += `  problem_cards = ${item.problemCards ? `'${JSON.stringify(item.problemCards)}'` : 'NULL'},\n`;
        sql += `  solution_description = ${escapeSql(item.solutionDescription)},\n`;
        sql += `  solution_cards = ${item.solutionCards ? `'${JSON.stringify(item.solutionCards)}'` : 'NULL'},\n`;
        sql += `  impact = ${item.impact ? `'${JSON.stringify(item.impact)}'` : 'NULL'},\n`;
        sql += `  outcomes = ${item.outcomes ? `'${JSON.stringify(item.outcomes)}'` : 'NULL'},\n`;
        sql += `  project_steps = ${item.projectSteps ? `'${JSON.stringify(item.projectSteps)}'` : 'NULL'},\n`;
        sql += `  subtitle = ${escapeSql(item.subtitle)},\n`;
        sql += `  technologies = ${item.technologies ? `'${JSON.stringify(item.technologies)}'` : 'NULL'},\n`;
        sql += `  updated_at = NOW()\n`;
        sql += `WHERE id = '${item.id}';\n\n`;
    }

    const outputPath = path.join(process.cwd(), 'supabase', 'update_portfolio_content.sql');
    // ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, sql);
    console.log(`✅ SQL migration file generated at: ${outputPath}`);
}

generateSql();
