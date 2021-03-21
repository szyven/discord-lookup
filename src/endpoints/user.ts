import fetch from 'node-fetch';

/**
 * @function fetchuser
 * @param id
 * @returns {Any} User data
 */

export async function fetchuser(id: String | Number) {

    let status;
    const data = await fetch(`https://discord.com/api/v8/users/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${process.env.DISCORD_AUTH}`,
        },
    })
    .then((res) => {
        status = res.status
        return res.json();
    });

    return {
        status: status,
        response: {
            id: data.id,
            username: data.username,
            tag: data.discriminator,
            publicFlags: data.public_flags
        },
    };
}