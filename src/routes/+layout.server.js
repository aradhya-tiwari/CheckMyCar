

let loggedIn;
export async function load({ locals, cookies }) {
    // cookies.set('sessionId', "info@gmail.com", {
    //     httpOnly: true,
    //     sameSite: process.env.NODE_ENV === 'production',
    //     secure: false,
    //     path: '/',
    //     maxAge: 60 * 60 * 24 * 7
    // });
    locals.user = {
        name: "user.username",
        role: "user.role.name",
    }
    console.log(locals)
}