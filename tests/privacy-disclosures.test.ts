import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const legal = readFileSync(join(ROOT, 'src/components/layout/LegalContent.astro'), 'utf8');

describe('privacy disclosures match consent-gated analytics', () => {
  it('does not claim that GA data is anonymous or no personal data is processed', () => {
    expect(legal).not.toContain('collect anonymized usage data');
    expect(legal).not.toContain('We do not directly collect or store personal data');
    expect(legal).toContain('loads only after you accept');
    expect(legal).toContain("browser's site-data controls");
  });

  it('qualifies advertising and provides working opt-out destinations in the markup', () => {
    expect(legal).toContain('Advertising partners, if enabled');
    expect(legal).toContain('href="https://adssettings.google.com/"');
    expect(legal).toContain('href="https://www.aboutads.info/choices/"');
    expect(legal).toContain('your visits to this and other websites');
  });

  it('keeps the privacy revision date in sync without refreshing unrelated legal pages', () => {
    const defaultPage = readFileSync(join(ROOT, 'src/pages/privacy-policy.astro'), 'utf8');
    const localizedPage = readFileSync(join(ROOT, 'src/pages/[locale]/[legal].astro'), 'utf8');
    const date = defaultPage.match(/lastUpdated="(\d{4}-\d{2}-\d{2})"/)?.[1];
    expect(date).toBeTruthy();
    expect(localizedPage).toContain(`pageKey === 'privacy-policy' ? '${date}' : '2026-08-11'`);
  });
});
