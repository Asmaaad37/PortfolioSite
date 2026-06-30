import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('AI Engineer');
    expect(aboutMarkdown).toContain('Data Scientist');
  });

  it('contains the experience section', () => {
    expect(aboutMarkdown).toContain('# Experience Highlights');
    expect(aboutMarkdown).toContain('Sofnix');
    expect(aboutMarkdown).toContain('Data Zenix');
  });

  it('contains the notable projects section', () => {
    expect(aboutMarkdown).toContain('# Notable Projects');
    expect(aboutMarkdown).toContain('UOS Assistant');
    expect(aboutMarkdown).toContain('DeepFake Detection System');
  });

  it('contains the certifications section', () => {
    expect(aboutMarkdown).toContain('# Certifications');
    expect(aboutMarkdown).toContain('Google Data Analytics');
    expect(aboutMarkdown).toContain('IBM AI Engineer');
  });

  it('contains the interests section', () => {
    expect(aboutMarkdown).toContain('# Interests');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(0);
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(3);
  });
});
