/** API base URL. Set NEXT_PUBLIC_API_URL when deploying (e.g. https://api.yoursite.com). */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

function getHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}

export async function login(data: any) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
}

export async function register(data: any) {
    try {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({ message: 'Registration failed' }));
            throw new Error(errorData.message || `Registration failed: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error: any) {
        if (error.message.includes('fetch')) {
            throw new Error('Cannot connect to server. Please ensure the backend is running on http://localhost:3001');
        }
        throw error;
    }
}

export async function fetchResumes() {
    const res = await fetch(`${API_URL}/resumes`, { headers: getHeaders() });
    if (!res.ok) {
        if (res.status === 401) throw new Error('Unauthorized');
        throw new Error('Failed to fetch resumes');
    }
    return res.json();
}

export async function fetchResume(id: string) {
    const res = await fetch(`${API_URL}/resumes/${id}`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch resume');
    return res.json();
}

export async function createResume(data: any) {
    const res = await fetch(`${API_URL}/resumes`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create resume');
    return res.json();
}

export async function updateResume(id: string, data: any) {
    const res = await fetch(`${API_URL}/resumes/${id}`, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update resume');
    return res.json();
}

export async function improveText(text: string, instruction: string) {
    const res = await fetch(`${API_URL}/ai/improve`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ text, instruction }),
    });
    if (!res.ok) throw new Error('Failed to improve text');
    return res.json();
}
