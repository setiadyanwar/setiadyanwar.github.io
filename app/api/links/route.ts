import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { LinkItem } from '@/lib/links-data';

const dataFilePath = path.join(process.cwd(), 'public', 'data', 'links.json');

// GET - Read all links
export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const links = JSON.parse(fileContents);
    return NextResponse.json(links);
  } catch (error) {
    console.error('Error reading links:', error);
    return NextResponse.json({ error: 'Failed to read links' }, { status: 500 });
  }
}

// POST - Create new link
export async function POST(request: NextRequest) {
  try {
    const newLink: LinkItem = await request.json();
    
    // Validate required fields
    if (!newLink.id || !newLink.title || !newLink.url) {
      return NextResponse.json(
        { error: 'Missing required fields: id, title, url' },
        { status: 400 }
      );
    }

    // Read existing links
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const links: LinkItem[] = JSON.parse(fileContents);

    // Check if ID already exists
    if (links.some(link => link.id === newLink.id)) {
      return NextResponse.json(
        { error: 'Link with this ID already exists' },
        { status: 400 }
      );
    }

    // Add new link
    links.push(newLink);

    // Write back to file
    await fs.writeFile(dataFilePath, JSON.stringify(links, null, 2), 'utf8');

    return NextResponse.json({ success: true, link: newLink });
  } catch (error) {
    console.error('Error creating link:', error);
    return NextResponse.json({ error: 'Failed to create link' }, { status: 500 });
  }
}

// PUT - Update existing link
export async function PUT(request: NextRequest) {
  try {
    const updatedLink: LinkItem = await request.json();
    
    if (!updatedLink.id) {
      return NextResponse.json(
        { error: 'Link ID is required' },
        { status: 400 }
      );
    }

    // Read existing links
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const links: LinkItem[] = JSON.parse(fileContents);

    // Find and update link
    const index = links.findIndex(link => link.id === updatedLink.id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Link not found' },
        { status: 404 }
      );
    }

    links[index] = updatedLink;

    // Write back to file
    await fs.writeFile(dataFilePath, JSON.stringify(links, null, 2), 'utf8');

    return NextResponse.json({ success: true, link: updatedLink });
  } catch (error) {
    console.error('Error updating link:', error);
    return NextResponse.json({ error: 'Failed to update link' }, { status: 500 });
  }
}

// DELETE - Delete link
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Link ID is required' },
        { status: 400 }
      );
    }

    // Read existing links
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const links: LinkItem[] = JSON.parse(fileContents);

    // Filter out the link to delete
    const filteredLinks = links.filter(link => link.id !== id);

    if (filteredLinks.length === links.length) {
      return NextResponse.json(
        { error: 'Link not found' },
        { status: 404 }
      );
    }

    // Write back to file
    await fs.writeFile(dataFilePath, JSON.stringify(filteredLinks, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting link:', error);
    return NextResponse.json({ error: 'Failed to delete link' }, { status: 500 });
  }
}

