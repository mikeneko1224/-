<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    </head>

    <body class="antialiased">
        <div>
            <form action="/add_time" method="post">
                <table>
                    @csrf 
                    <tr>
                        <td>name</td>
                        <td><input type="text" name="name"></td>
                    <tr>
                    <tr>
                        <td>text</td>
                        <td><input type="text" name="text"></td>
                    <tr>
                    <tr>
                        <td>date</td>
                        <td><input type="text" name="date"></td>
                    <tr>
                    <tr>
                        <td>time</td>
                        <td><input type="text" name="time"></td>
                    <tr>
                </table>
                <button type="submit">送信</button>
            </form>
        </div>
    </body>
</html>
