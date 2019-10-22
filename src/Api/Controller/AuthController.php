<?php

namespace Hyn\Websocket\Api\Controller;

use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Pusher\Pusher;
use Zend\Diactoros\Response\EmptyResponse;
use Zend\Diactoros\Response\JsonResponse;

class AuthController implements RequestHandlerInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $userChannel = 'private-user'.$request->getAttribute('actor')->id;
        $body = $request->getParsedBody();

        if (array_get($body, 'channel_name') === $userChannel) {
            $pusher = new Pusher(
                $this->settings->get('hyn-websocket.app_key'),
                $this->settings->get('hyn-websocket.app_secret'),
                $this->settings->get('hyn-websocket.app_id'),
                [],
                $this->settings->get('hyn-websocket.app_host'),
                $this->settings->get('hyn-websocket.app_port')
            );

            $payload = json_decode($pusher->socket_auth($userChannel, array_get($body, 'socket_id')), true);

            return new JsonResponse($payload);
        }

        return new EmptyResponse(403);
    }
}
