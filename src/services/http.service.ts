class HttpService {

    sendEmail(message: string): Promise<string> {
        return Email.send({
            Host: 'smtp.gmail.com',
            Username: 'rzherdev6@gmail.com',
            Password: 'MIOC@%Vfjkweriu',
            To: 'romazherdev@gmail.com',
            From: 'rzherdev6@gmail.com',
            Subject: 'From my website',
            Body: message,
        });
    }

}

export const http = new HttpService();
