import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('SEO static assets', () => {
  it('robots.txt should allow crawlers and specify sitemap', () => {
    const robotsPath = path.resolve(process.cwd(), 'static/robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);

    const content = fs.readFileSync(robotsPath, 'utf-8');
    expect(content).toContain('User-agent: *');
    expect(content).toContain('Allow: /');
    expect(content).toContain('Sitemap: https://sambyte.net/sitemap.xml');
  });

  it('sitemap.xml should contain valid URLs', () => {
    const sitemapPath = path.resolve(process.cwd(), 'static/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);

    const content = fs.readFileSync(sitemapPath, 'utf-8');
    expect(content).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(content).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(content).toContain('<loc>https://sambyte.net/</loc>');
    expect(content).toContain('<loc>https://sambyte.net/systology/</loc>');
    expect(content).toContain('<loc>https://sambyte.net/rustoku/</loc>');
    expect(content).toContain('<loc>https://sambyte.net/ultimate-python/en/</loc>');
    expect(content).not.toContain('chowist');
  });
});
